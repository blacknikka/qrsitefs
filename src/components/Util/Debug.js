class Dbg {
  constructor() {
    this.debug = process.env.NODE_ENV === 'development' ? 'debug' : '';
  }

  // if env is debug, output log to console
  console(log) {
    if (this.debug === 'debug') {
      console.log(log);
    }
  }
}

const Inst = new Dbg();

export default Inst;
