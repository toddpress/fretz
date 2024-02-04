import { Note } from "../../types";
import { normalizeNoteName } from "../../util";
import { FRET_WIDTHS } from "../../constants";

type FretProps = {
  fretNumber: number;
  stringNumber: number;
  note: Note;
  [key: string]: any;
};

export const Fret = ({
  fretNumber,
  stringNumber,
  note,
  ...props
}: FretProps) => {
  const noteName = normalizeNoteName(note);
  return (
    <td
      headers={`string_${stringNumber} fret_${fretNumber}`}
      className='note'
      data-name={noteName}
      style={{ display: "block", width: `${FRET_WIDTHS[fretNumber] * 4}rem` }}
      {...props}
    >
      <span
        className='name hidden'
        aria-labelledby={`string_${stringNumber} fret_${fretNumber}`}
      >
        {noteName}
      </span>
    </td>
  );
};
