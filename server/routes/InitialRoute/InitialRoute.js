import InitialRouteController from '../../controllers/InitialRoute/InitialRoute';

export default function InitialRoute(app) {
  // Initialize controllers
  const initialRoute = new InitialRouteController(app);

  // GET endpoints
  app.get('/api/v1/initial-route', initialRoute.getInitialRestRoute);
}
