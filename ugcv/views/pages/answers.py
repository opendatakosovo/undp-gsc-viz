from flask import render_template
from flask.views import View

class Answers(View):
    def dispatch_request(self, question_id):
    	if question_id in [1, 2, 3, 7, 9, 11, 12, 13]:
        	return render_template('multichoice.html')
        else:
        	return "other"

        
