import { Component } from 'react';
import dva from 'dva';
import createLoading from 'dva-loading';

let app = dva({
  history: window.g_history,
  
});

window.g_app = app;
app.use(createLoading());
app.use(require('/Users/hjd/dc/app/yzzc2/wap/node_modules/_dva-immer@0.1.2@dva-immer/lib/index.js').default());
app.model({ ...(require('/Users/hjd/dc/app/yzzc2/wap/model.js').default) });

class DvaContainer extends Component {
  render() {
    app.router(() => this.props.children);
    return app.start()();
  }
}

export default DvaContainer;
