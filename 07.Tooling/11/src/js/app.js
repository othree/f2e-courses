
import Backbone from 'backbone';
import AppRoute from './route';

var route = new AppRoute();

Backbone.history.start({pushState: false});

