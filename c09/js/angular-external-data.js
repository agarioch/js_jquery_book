function TimetableCtrl($scope, $http) {
    var elTimetable = document.getElementById('timetable');
    $http.get('js/items.json')
    .success(function(data) {$scope.sessions = data.sessions;})
    .error(function(data) { elTimetable.append('Error, could not fetch content')});
}