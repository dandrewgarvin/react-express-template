import ErrorHandler from '../../errors/ErrorHandler';
import ErrorTypes from '../../errors/ErrorTypes';

export default class InitialRouteController {
  constructor(app) {
    this.app = app;
  }

  /**
   * @name getInitialRestRoute
   * @version 0.1.0
   *
   * @param {Object} req the request object
   * @param {Object} res the response object
   *
   * @returns {Object} Object
   */
  getInitialRestRoute = (req, res) => {
    res.status(200).json({
      success: true,
      err: null,
      data: {
        msg: 'Successfully got initial route',
      },
    });
  };

  /**
   * @name getInitialGql
   * @version 1.0.0
   *
   * @returns {Boolean} Always returns true
   */
  getInitialGql = async (obj, args, ctx) => {
    return {
      test: true,
    };
  };

  /**
   * @name setInitialGql
   * @version 1.0.0
   *
   * @param {Boolean} initialInput the boolean value that the user wants returned
   *
   * @returns {Boolean} The same as the input entered
   */
  setInitialGql = async (obj, { initialInput }, ctx) => {
    const initialVariable = null;

    if (!initialVariable) {
      throw ErrorHandler('Intentional Thrown Error', ErrorTypes.INITIAL_ERROR);
    }

    return {
      test: initialInput,
    };
  };
}
