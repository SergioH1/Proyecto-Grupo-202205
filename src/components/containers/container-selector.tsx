import { useContext } from 'react';
import { IndexContext } from '../../context/index-context';
import { All } from '../All/all';
import { Boys } from '../Boys/boys';
import { Girls } from '../Girls/girls';

export function ContainerSelector() {
    let template = (
        <>
            <ul className="container-picture">
                <All></All>
                <Girls></Girls>
                <Boys></Boys>
            </ul>
        </>
    );
    return template;
}
