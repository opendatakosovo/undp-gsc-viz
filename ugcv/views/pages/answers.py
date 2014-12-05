from flask import render_template
from flask.views import View

class Answers(View):
    def dispatch_request(self, qid):

    	if qid in [1, 2, 5, 7, 10, 11, 12, 13]:
        	return render_template('multichoice.html', qid=qid)
        else:
        	return "other"

        
