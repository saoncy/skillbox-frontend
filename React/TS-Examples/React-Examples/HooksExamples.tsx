import React from "../../new-reddit/node_modules/@types/react";

export function MyHooks(props: { title: string }) {
  // React.useEffect(() => {
  //   console.log('componentDidMount');
  //   console.log('componentWillUpdate');
  // });

  // React.useEffect(() => {
  //   console.log('componentDidMount');

  //   return () => {
  //     console.log('componentWillUnmount');
  //   }
  // }, []);

  // React.useEffect(() => {
  //   console.log('componentWillReceiveProps: ', props.title);
  // }, [props.title]);

  const [isMounted] = useIsMounted();

  React.useEffect(() => {
    console.log(isMounted);
  }, [isMounted])

  const items = 10;
  const multiplier = 5;

  const result = React.useMemo(
    () => {
      console.log('CALC');
      return calculate(items, multiplier);
    },
    [items, multiplier]
  )

  return (
    <div>{props.title} {result}</div>
  )
}


function calculate(items: number, multiplier: number) {
  return new Array(items).fill(1).reduce((p, c) => p * multiplier)
}


function useIsMounted() {
  const [isMounted, setIsMounted] = React.useState(false);

  React.useEffect(() => {
    setIsMounted(true);
  }, []);

  return [isMounted];
}
