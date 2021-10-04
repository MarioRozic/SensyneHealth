import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const QuestionFour = () => {
  const [isFirst, setIsFirst] = useState(true);
  const [count, setCount] = useState(0);
  const [increase, setShouldIncrease] = useState(false);

  useEffect(() => {
    if (isFirst) {
      setIsFirst(false);
      return;
    }

    if (increase) {
      setInterval(() => {
        setCount(count + 1);
      }, 1000);
    }
  }, [count, increase]);

  console.log("render");
  return (
    <>
      <Typography gutterBottom variant="h5" component="h2">
        Count: {count}
      </Typography>
      <Button variant="contained" onClick={() => setShouldIncrease(true)}>
        Start increasing
      </Button>
    </>
  );
};

export default QuestionFour;
