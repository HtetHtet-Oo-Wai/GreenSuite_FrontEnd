'use client';

import React from 'react';
import PieChart from '../../components/Charts/piechart';
import ChartToggle from '@/components/Charts/lineAndBar';


const StatisticsPage = () => {

    

    return (
        <div className='p-4 grid md:grid-cols-3 grid-cols-1 gap-4 bg-gray-100'>
            <ChartToggle />
        </div>
    );
};



export default StatisticsPage;
