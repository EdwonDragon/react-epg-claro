import {
  ProgramBox,
  ProgramContent,
  ProgramFlex,
  ProgramStack,
  ProgramTitle,
  ProgramText,
  useProgram,
} from "planby";

export const ProgramItem = ({ program, setData, ...rest }) => {
  const { styles, formatTime, set12HoursTimeFormat } = useProgram({
    program,
    ...rest,
  });

  const { data } = program;
  const { title, since, till, duration } = data;
  const sinceTime = formatTime(since, set12HoursTimeFormat()).toLowerCase();
  const tillTime = formatTime(till, set12HoursTimeFormat()).toLowerCase();
  const duracion = duration.split(":");

  const handleShow = () => {
    setData({
      ...data,
      sinceTime: sinceTime + " a ",
      tillTime,
      hora: duracion[0] + "h",
      min: duracion[1] + "min",
    });
  };

  return (
    <>
      <ProgramBox width={styles.width} style={styles.position}>
        <ProgramContent onMouseOver={handleShow} width={styles.width}>
          <ProgramFlex>
            <ProgramStack>
              <ProgramTitle>{title}</ProgramTitle>
              <ProgramText>
                {sinceTime} - {tillTime}
              </ProgramText>
            </ProgramStack>
          </ProgramFlex>
        </ProgramContent>
      </ProgramBox>
    </>
  );
};
