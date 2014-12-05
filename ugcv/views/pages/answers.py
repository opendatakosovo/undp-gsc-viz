from flask import render_template
from flask.views import View

class Answers(View):
    def dispatch_request(self, qid):

        return render_template('multichoice.html', qid=qid)

        
