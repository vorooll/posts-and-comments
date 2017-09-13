app.controller("MainController", ["$scope", function($scope){

  $scope.items = [
    {"name": "First item with custom name",
    "comments": [
      { "comment":
      "A variation of the ordinary lorem ipsum text has been used in typesetting since the 1960s or earlier, when it was popularized by advertisements for Letraset transfer sheets. It was introduced to the Information Age in the mid-1980s",
      },
      { "comment":
      "A variation of the ordinary lorem ipsum text has been used in typesetting since the 1960s or earlier, when it was popularized by advertisements for Letraset transfer sheets. It was introduced to the Information Age in the mid-1980s"
      }
    ]},
    {"name": "Second item is active",
    "comments": [
      { "comment":
      "A variation of the ordinary lorem ipsum text has been used in typesetting since the 1960s or earlier, when it was popularized by advertisements for Letraset transfer sheets. It was introduced to the Information Age in the mid-1980s"
      },
      { "comment":
      "A variation of the ordinary lorem ipsum text has been used in typesetting since the 1960s or earlier, when it was popularized by advertisements for Letraset transfer sheets. It was introduced to the Information Age in the mid-1980s"
      },
      { "comment":
      "A variation of the ordinary lorem ipsum text has been used in typesetting since the 1960s or earlier, when it was popularized by advertisements for Letraset transfer sheets. It was introduced to the Information Age in the mid-1980sA variation of the ordinary lorem ipsum text has been used in typesetting since the 1960s or earlier, when it was popularized by advertisements for Letraset transfer sheets. It was introduced to the Information Age in the mid-1980sA variation of the ordinary lorem ipsum text has been used in typesetting since the 1960s or earlier, when it was popularized by advertisements for Letraset transfer sheets. It was introduced to the Information Age in the mid-1980s"
      }
    ]}
  ];

  // $scope.items = [];
  // $scope.itemComments = [];
  $scope.selected = false;
  $scope.itemPlaceholder = "Type name here...";

  // when new item is added we add corresponding element to
  // the end of an array and select this new item
  $scope.addItem = function() {
    $scope.items.push({"name": $scope.newItem, "comments": []});
    $scope.selectedIndex = $scope.items.length-1;
    $scope.itemComments = [];
    $scope.my_item.$setPristine();
    $scope.newItem = [];
  };

  // when item is deleted we remove the corresponding
  // element from array and select previous element
  $scope.delItem = function(index) {
    $scope.items.splice(index, 1);
    $scope.selectedIndex = index-1;
    $scope.itemComments = $scope.items[index-1].comments;
  };

  $scope.selectItem = function(index) {
    $scope.selectedIndex = index;
    $scope.itemComments = $scope.items[index].comments;
  }

  $scope.addComment = function(keyEvent) {
    if (keyEvent.which === 13) {
      $scope.items[$scope.selectedIndex].comments.push({"comment": $scope.newComment});
      $scope.itemComments = $scope.items[$scope.selectedIndex].comments;
      $scope.my_comment.$setPristine();
      $scope.newComment = "";
      // $scope.$apply();
    };
  };

  $scope.toLocalStorage = function () {
    localStorage.setItem("items", JSON.stringify($scope.items));
  };

  $scope.fromLocalStorage = function () {
    $scope.items = JSON.parse(localStorage.getItem("items"));
  };

}]);
