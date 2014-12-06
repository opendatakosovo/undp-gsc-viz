from flask import Response
from flask.views import View
from urllib2 import urlopen
from ugcv import utils


class SurveyeeDistribution(View):

    def dispatch_request(self, group):
        ''' Get JSON response of answers for given question grouped by given interviewee group parameter.
        :param group: the interviewee parameter to group by e.g. gender, ethnicity...
        '''

        api_base_url = utils.get_api_url()
        req_url = "%s/surveyee/distribution/%s" % (api_base_url, group)

        result = urlopen(req_url).read()

        # Build response object.
        resp = Response(
            response=result,
            mimetype='application/json')

        # Return response.
        return resp