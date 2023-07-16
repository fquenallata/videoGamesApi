const handleErrors = async (promise, errorMessage) => {
  try {
    const result = await promise;
    return result;
  } catch (error) {
    throw new Error(errorMessage);
  }
};

module.exports = handleErrors;
