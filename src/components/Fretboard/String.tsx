
import { For } from '../common/For'
import { Fret } from './Fret'

import { Note } from '../../types'

type StringProps = {
    stringNumber: number
    notes: Note[]
}

const String = ({ stringNumber, notes }: StringProps) => {
    return (
        <tr style={{ display: 'flex' }}>
            <th id={`string_${stringNumber}`} scope="row">
                <span className="sr-only">String {stringNumber}</span>
            </th>
            <For in={notes}>
                {(note: Note, index: number) => (
                    <Fret
                        fretNumber={index}
                        stringNumber={stringNumber}
                        note={note}
                    />
                )}
            </For>
        </tr>
    )
}

export default String
