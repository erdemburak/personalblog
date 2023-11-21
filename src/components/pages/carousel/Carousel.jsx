import React, { useState } from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
    {
        label: 'code',
        imgPath: 'https://r.resimlink.com/0GQ6s9NWC.png',
    },
    {
        label: 'java',
        imgPath: 'https://r.resimlink.com/pncEg3YOiNkh.png',
    },
    {
        label: 'react',
        imgPath: 'https://r.resimlink.com/IOGUzbL5J8.png',
    },
    {
        label: 'javascript',
        imgPath: 'https://r.resimlink.com/03gzfMXl.png',
    },
    {
        label: 'html',
        imgPath: 'https://r.resimlink.com/32CwktQW9.png',
    },
    {
        label: 'database',
        imgPath: 'https://r.resimlink.com/xysRwA_bv.png',
    },
];

function Carousel() {
    const theme = useTheme();
    const [activeStep, setActiveStep] = useState(0);

    const handleStepChange = (step) => {
        setActiveStep(step);
    };

    return (<>
        <Box sx={{ width: '300px', objectFit: 'cover', flexGrow: 1 }}>
            <AutoPlaySwipeableViews
                axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                index={activeStep}
                onChangeIndex={handleStepChange}
                enableMouseEvents
            >
                {images.map((step, index) => (
                    <div key={step.label}>
                        {Math.abs(activeStep - index) <= 2 ? (
                            <img
                                src={step.imgPath}
                                alt={step.label}
                                style={{ width: '180px', height: 'auto' }}
                            />
                        ) : null}
                    </div>
                ))}
            </AutoPlaySwipeableViews>
        </Box>

    </>)
}

export default Carousel;