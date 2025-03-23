const submitData = async <T>(values: T) => {
  await new Promise<void>((resolve) =>
    setTimeout(() => {
      console.log(values);
      resolve();
    }, 1000)
  );
};

export default submitData;
