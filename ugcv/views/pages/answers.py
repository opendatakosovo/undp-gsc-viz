from flask import render_template, request
from flask.views import View

class Answers(View):
    def dispatch_request(self, qid, chart_type):

        if chart_type == 'barchart':
            
            chart_height = '750px';
            if qid in [4, 6, 7, 9, 14, 15]:
                chart_height = '400px'; 

            if '/disaggregate/' in request.path:
                return render_template('barchart_disaggregated.html', qid=qid, chart_type=chart_type, chart_height=chart_height)
            else:
                return render_template('barchart.html', qid=qid, chart_type=chart_type, chart_height=chart_height)
        else:
            #FIXME: Handle this more elegantly.
            if '/disaggregate/' in request.path:
                if qid in [4, 6, 7, 9, 14, 15]:
                    return render_template('barchart_disaggregated.html', qid=qid, chart_type=chart_type, chart_height='400px')
                else:
                    #return render_template('multichoice.html', qid=qid)
                    return render_template('spiderweb_disaggregated.html', qid=qid, chart_type=chart_type, chart_height='500px')
            else:
                if qid in [4, 6, 7, 9, 14, 15]:
                    return render_template('barchart.html', qid=qid, chart_type=chart_type, chart_height='400px')
                else:
                    #return render_template('multichoice.html', qid=qid)
                    return render_template('spiderweb.html', qid=qid, chart_type=chart_type, chart_height='500px')