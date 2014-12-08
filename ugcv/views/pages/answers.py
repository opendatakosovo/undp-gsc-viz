from flask import render_template
from flask.views import View

class Answers(View):
    def dispatch_request(self, qid):
        if qid in [4, 7, 14]:
            return render_template('barchart.html', qid=qid)
        else:
            return render_template('multichoice.html', qid=qid)