from flask import Response
from flask.views import View
from urllib2 import urlopen
from ugcv import utils


class DocumentedCorruptions(View):

    def dispatch_request(self, corruption_type, group):
        ''' Get JSON response of answers for given question grouped by given interviewee group parameter.

        :param corruption_type: the type of corruption
        :param group: the interviewee group to group by e.g. gender, ethnicity...
        '''

        api_base_url = utils.get_api_url()
        req_url = "%s/corruption-type/%s/group/%s" % (api_base_url, corruption_type, group)

        result = urlopen(req_url).read()

        # Build response object.
        resp = Response(
            response=result,
            mimetype='application/json')

        # Return response.
        return resp
