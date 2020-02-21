// //// Check truthy predicate on all elements of collection //////////////
function truthCheck(collection, pre) {
  for (let i = 0, { length } = collection; i < length; i += 1) {
    if (!collection[i][pre]) return false;
  }

  return true;
}

module.exports = truthCheck;

truthCheck(
  [
    { user: 'Tinky-Winky', sex: 'male' },
    { user: 'Dipsy', sex: 'male' },
    { user: 'Laa-Laa', sex: 'female' },
    { user: 'Po', sex: 'female' },
  ],
  'sex',
);

// //////////////////////////////
