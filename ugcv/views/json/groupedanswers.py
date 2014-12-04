from flask import Response
from flask.views import View
import simplejson as json

class GroupedAnswers(View):

    def dispatch_request(self, group):

        # Build response object.
        resp = Response(
            response=json.dumps({"test": "hello"}),
            mimetype='application/json')

        # Return response.
        return resp
