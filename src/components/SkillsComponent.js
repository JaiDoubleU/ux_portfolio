import React from 'react'
import SingleSkill from '../components/SingleSkillComponent';
import { skills } from '../shared';

function Skills() {
    return (
        <div>
            <h2 className='page__heading' style={{ textAlign: 'start' }}>Skills</h2>

            {skills.map(skill => (
                <div key={skill.category} className="skill-category-container">
                    <p className='skills__category'>{skill.category}</p>
                    <div className="skill__group mb-3">
                        {skill.arr.map((s,index) => (
                            <SingleSkill key={index} skill={s} />
                        ))}
                    </div>
                </div>
            ))}


        </div>
    )
}

export default Skills
