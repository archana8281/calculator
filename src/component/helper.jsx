// export default function Button(){
    const ButtonGroup = ({ buttons }) => {
        return (
          <>
            {buttons.map((buttonLabel, i) => (
              <button key={i} name={buttonLabel}>
                {buttonLabel}
              </button>
            ))}
          </>
        );
      };
// }