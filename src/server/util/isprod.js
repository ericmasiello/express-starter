/* @flow */
function isprod() {
  return process.env.NODE_ENV === 'production';
}

export default isprod();
