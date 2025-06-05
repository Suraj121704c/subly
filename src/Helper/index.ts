export const isContinueBtnShow = (status: string) => {
  switch (status) {
    case 'radio':
      return true;
    case 'images':
      return false;
    default:
      return status;
  }
};

export const stepCount = (progress: number): number => {
  if (progress.toFixed(1) === '0.2') return 1;
  if (progress.toFixed(1) === '0.4') return 2;
  if (progress.toFixed(1) === '0.6') return 3;
  if (progress.toFixed(1) === '0.8') return 4;
  if (progress.toFixed(1) === '0.5') return 5;
  return 0;
};

export const getUpdatedArray = (arr: any, id: number) => {
  return arr.map((item: any) => {
    if (item.id === id) {
      return {...item, selected: true};
    }
    return item;
  });
};

export const isAlreadyStartedPlan = (plans: any, id: number) => {
  return plans.some((item: any) => item.id === id);
};

export const filterSelectedQuestions = (array: any, type: string) => {
  if (type === 'checkbox') {
    // Return array of questions where isSelected is true
    const selectedQuestions = array
      .filter((item: any) => item.isSelected)
      .map((item: any) => item.question);
    return selectedQuestions.length > 0 ? selectedQuestions : [];
  } else if (type === 'radio') {
    // Return only one question where isSelected is true, or empty string if none is selected
    const selected = array.find((item: any) => item.isSelected);
    return selected ? selected.question : '';
  } else {
    // Return an empty array if type is not 'checkbox' or 'radio'
    return [];
  }
};
