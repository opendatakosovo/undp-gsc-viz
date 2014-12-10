from flask import Response
from flask.views import View
from urllib2 import urlopen
from ugcv import utils


class GroupedAnswers(View):

    def dispatch_request(self, qid, group, disaggregate=None):
        ''' Get JSON response of answers for given question grouped by given interviewee group parameter.

        :param qid: the question id.
        :param group: the interviewee group to group by e.g. gender, ethnicity...
        '''

        api_base_url = utils.get_api_url()

        if disaggregate == None:
            req_url = "%s/question/%i/group/%s" % (api_base_url, qid, group)
        else:
            req_url = "%s/question/%i/group/%s/disaggregate/%s" % (api_base_url, qid, group, disaggregate)

        result = urlopen(req_url).read()

        # Build response object.
        resp = Response(
            response=result,
            mimetype='application/json')

        # Return response.
        return resp
