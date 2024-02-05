import { Note } from "../../types";
import { normalizeNoteName } from "../../util";
import { FRET_WIDTHS } from "../../constants";
import { ccc } from "../../util/ccc";

type FretProps = {
  fretNumber: number;
  stringNumber: number;
  note: Note;
  classNames?: string;
  [key: string]: any;
};

// TODO - move fret widths into scss file, 10rem seems to be a good base width
// TODO - add support for fret markers
// TODO - add support for inlays
// TODO - color code notes, place into memorable colors or shapes
// TODO - add support for masking the note names

export const Fret = ({
  fretNumber,
  stringNumber,
  note,
  classNames,
  ...props
}: FretProps) => {
  const noteName = normalizeNoteName(note);
  return (
    <td
      headers={`string_${stringNumber} fret_${fretNumber}`}
      className={ccc('fret', `fret_${fretNumber}`, classNames)}
      data-name={noteName}
      style={{ width: `${FRET_WIDTHS[fretNumber] * 4}rem`, textShadow: '0px 0px 4px #000', borderRight: '4px solid #383530'}}
      {...props}
    >
      <span
        className='note-name'
        aria-labelledby={`string_${stringNumber} fret_${fretNumber}`}
      >
        {noteName}
      </span>
    </td>
  );
};
