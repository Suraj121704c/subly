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
