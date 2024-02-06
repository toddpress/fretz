import { Note } from "../../types";
import { normalizeNoteName } from "../../util";
import { ccc } from "../../util/ccc";
import { FRET_WIDTHS } from "../../constants";

import styles from "./fretboard.module.scss";

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
  className,
  ...props
}: FretProps) => {
  const noteName = normalizeNoteName(note);
  return (
    <td
      headers={`string_${stringNumber} fret_${fretNumber}`}
      className={ccc(`fret_${fretNumber}`, className)}
      style={{ width: `${FRET_WIDTHS[fretNumber] * 4}rem`}}
      {...props}
    >
      <span
        className={ccc(styles.note)}
        aria-labelledby={`string_${stringNumber} fret_${fretNumber}`}
        data-name={noteName}
      >
        {noteName}
      </span>
    </td>
  );
};
