from flask import render_template, request
from flask.views import View

class Answers(View):
    def dispatch_request(self, qid):
        #FIXME: Handle this more elegantly.
        if request.path.endswith('disaggregate'):
            if qid in [4, 6, 7, 9, 14, 15]:
                return render_template('barchart_disaggregated.html', qid=qid)
            else:
                #return render_template('multichoice.html', qid=qid)
                return render_template('spiderweb_disaggregated.html', qid=qid)
        else:
            if qid in [4, 6, 7, 9, 14, 15]:
                return render_template('barchart.html', qid=qid)
            else:
                #return render_template('multichoice.html', qid=qid)
                return render_template('spiderweb.html', qid=qid)