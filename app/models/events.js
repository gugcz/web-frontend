// Get a particular event
exports.get = function (id, cb) {
  e = {
    id: 1,
    name: 'GUG Howto',
    description: 'Nachytřovací setkání',
    venue: 'Praha'
  }
  cb(e)
}

// Get all events
exports.all = function (cb) {
  e = [
    {
      id: 1,
      name: 'GUG Howto',
      description: 'Nachytřovací setkání',
      venue: 'Praha'
    },
    {
      id: 2,
      name: 'GUG Hackaton',
      description: 'Pure web awesomeness',
      venue: 'Tobis place'
    },
    {
      id: 3,
      name: 'DevFest',
      description: 'Festival of code',
      venue: 'Ostrava'
    }
  ]
  cb(e)
}
