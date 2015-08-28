/*======================================================================*\
  ICBIaW50OiBtYWtlIHRoaXMgYXMgY2xvc2UgdG8gcHJvZHVjdGlvbi1yZWFkeSBzb3VyY2
  UgY29kZSBhcyB5b3UgY2FuIQoKICBCb251cyBwb2ludHMgZm9yIHRlbGxpbmcgdXMgd2hh
  dCB0aGlzIGRvZXMgaW4gcGxhaW4gdGVybXM6CgogICAgJycuam9pbihpdGVydG9vbHMuY2
  hhaW4oKnppcChzWy0yOjotMl0sIHNbOjotMl0pKSk=
\*======================================================================*/

(function () {
    if (NAMESPACE === null || typeof (NAMESPACE) != "object") {
        var NAMESPACE = {};

        var GetId = function (id) {
            var _id = id;
            var _closed = false;

            var getId = function () {
                return _id;
            };

            var setClose = function () {
                //Delete will not work
                _closed = true;
                return _closed;
            };

            var persona = {
                getId: getId,
                isClose: setClose
            };

            return persona;
        };

        NAMESPACE.id = GetId;
    }
})();
