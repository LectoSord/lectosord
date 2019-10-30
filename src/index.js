import React from 'react';
import  {render} from 'react-dom';
import * as serviceWorker from './serviceWorker';
import Main from './Main'


render(<Main  />, document.getElementById('root'));
//render(<NameForm />, document.getElementById('root'));

serviceWorker.unregister();





