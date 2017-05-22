app.controller('PasswordsCtrl', ['$scope', 'Password', '$stateParams',
  function($scope, Password, $stateParams) {

    $scope.password = new Password({words: [null, null, null]});

    $scope.addWord = function() {
      $scope.password.words.push(null);
    }

    $scope.remove = function(index) {
      $scope.password.words.splice(index, 1);
    }

    $scope.generate = function() {
      var password = angular.copy($scope.password);
      password.$save().then(function(res) {
        $scope.possiblePasswords = res.data;
      })
    }

  }
]);
