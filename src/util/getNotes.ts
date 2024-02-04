import { Note } from '../types'

const notes: Note[] = [
    'A',
    'A#',
    'B',
    'C',
    'C#',
    'D',
    'D#',
    'E',
    'F',
    'F#',
    'G',
    'G#',
]

function* noteGenerator(startNote: Note) {
    let index = notes.indexOf(startNote)

    while (true) {
        yield notes[index % notes.length]
        index++
    }
}

export function getNotes(startNote: Note, length: number = 12): Note[] {
    const noteGen = noteGenerator(startNote)
    return Array.from({ length }, () => noteGen.next().value!)
}
