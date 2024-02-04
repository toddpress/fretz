import { Note } from '../types';

const flatToSharp: { [note in Note]?: Note } = {
    Ab: 'G#',
    Bb: 'A#',
    Db: 'C#',
    Eb: 'D#',
    Gb: 'F#',
};

export function normalizeNoteName(note: Note): Note {
    return flatToSharp[note] || note;
}
