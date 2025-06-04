import {
  CommonActions,
  StackActions,
  NavigationContainerRef,
} from '@react-navigation/native';

// Define the type for the navigator
let _navigator: NavigationContainerRef<any> | null = null;

// Set a top-level navigator from App.tsx
function setTopLevelNavigator(
  navigatorRef: NavigationContainerRef<any> | null,
): void {
  _navigator = navigatorRef;
}

// Navigate to a particular screen
// params -> (Name of screen, parameters)
function navigate(routeName: string, params: Record<string, any> = {}): void {
  if (_navigator) {
    _navigator.dispatch(
      CommonActions.navigate({
        name: routeName,
        params,
      }),
    );
  }
}

// Reset the current stack and navigate to a particular screen
// params -> (Name of screen, parameters)
function reset(routeName: string, params?: Record<string, any>): void {
  if (_navigator) {
    _navigator.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [{name: routeName, params}],
      }),
    );
  }
}

// Replace the current stack with a new stack or screen
// params -> (Name of screen or array of screens, parameters)
function replace(routeName: string, params: Record<string, any> = {}): void {
  if (_navigator) {
    _navigator.dispatch(StackActions.replace(routeName, params));
  }
}

// Go back to the previous screen
function back(): void {
  if (_navigator) {
    _navigator.dispatch(CommonActions.goBack());
  }
}

// Pop the top screen from the stack
// params -> (Number of screens to pop, defaults to 1)
function pop(count: number = 1): void {
  if (_navigator) {
    _navigator.dispatch(StackActions.pop(count));
  }
}

// Export the navigation helpers
export default {
  navigate,
  setTopLevelNavigator,
  reset,
  back,
  replace,
  pop,
};
