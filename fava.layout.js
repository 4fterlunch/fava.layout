var FAVA = (function() {
    function FavaDialog(position, name="") {
        const SOUTH_HEIGHT = 200;
        const STANDARD_HEIGHT = 400;
        const STANDARD_WIDTH = 300;
        const GLOBAL_MIN_WIDTH = 150;
        this._position = position;
        this._width = 0;
        this._minWidth = GLOBAL_MIN_WIDTH;
        this._height = 0;
        this._name = name;
        switch (position) {
            case "center bottom":
                this._width = window.innerWidth;
                this._height = 2;
                this._minWidth = window.innerWidth;
                break;
            default:
                this._width = 300;
                this._height = 400;
                break;
        }

    }
    var _uid = 0;
    var _currentPosition = 0;
    var _positions = ["left top", "right top", "center bottom", "right bottom", "left bottom"];
    var _root = document.getElementById("fava-layout");

    function nextUid() {
        return _uid++;
    }

    function nextPosition() {
        if (_currentPosition === _positions.length)
            _currentPosition = 0;
        return _positions[_currentPosition++];
    }

    return {
        addDialog: function(name=null) {
            var newDialog = document.createElement("div");
            var newId = nextUid();
            var dObject = new FavaDialog(nextPosition(),name);
            newDialog.id = `dialog-${newId}`;
            newDialog.localName = name || newId;
            _root.appendChild(newDialog);


            $(`#dialog-${newId}`).dialog(
                {
                position: 
                    {
                        at: nextPosition()
                    },
                height: dObject._height,
                width: dObject._width

            });
        }
    }
})();

FAVA.addDialog("first");
FAVA.addDialog("second");
FAVA.addDialog();
FAVA.addDialog();
