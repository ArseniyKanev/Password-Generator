app.factory('Password', [
  '$resource', function($resource) {
    return $resource('/api/v1/passwords/:id.json', {
      id: '@id'
    });
  }
]);
