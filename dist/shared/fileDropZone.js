angular.module('CSVApp')

.directive('fileDropzone', function() {
  return {
    restrict: 'A',
    scope: {
      file: '=',
      fileName: '=',
      fileDropzone: '='
    },
    link: function(scope, element, attrs) {

     var processDragOverOrEnter = function (event) {
        if (event != null) {
          event.preventDefault();
        }
        event.dataTransfer.effectAllowed = 'copy';
        return false;
      };


      element.bind('dragover', processDragOverOrEnter);
      element.bind('dragenter', processDragOverOrEnter);

      return element.bind('drop', function(event) {
        var file, name, reader;
        if (event != null) {
          event.preventDefault();
        }
        reader = new FileReader();
        reader.onload = function(e) {
          var contents = e.target.result;
          scope.$apply(function() {
            scope.fileDropzone = contents.split("\n")
              .map(function(record) {
                return record.split(",");
              });
            });
        };
        file = event.dataTransfer.files[0];
        name = file.name;
        reader.readAsText(file);
        return false;
      });
    }
  };
})
