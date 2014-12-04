from flask import Response
from flask.views import View
import simplejson as json

class GroupedAnswers(View):

    def dispatch_request(self, group):
    	pass

        # Build response object.
        #resp = Response(
        #    response=json.dumps(places_json[category]),
        #    mimetype='application/json')

        # Return response.
        #return resp
