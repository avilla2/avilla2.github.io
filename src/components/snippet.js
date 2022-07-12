import React from 'react';
import { CopyBlock, nord } from "react-code-blocks";

const Snippet = ({children}) => {
    return (
            <div className='snippet-container'>
                <CopyBlock 
                    text={children}
                    language='jsx'
                    theme={nord}
                />
            </div>
    );
};

export default Snippet;