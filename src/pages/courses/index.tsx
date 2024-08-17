import React from 'react'
import styles from '@/pages/courses/Courses.module.scss'

export default function index() {
    return (
        <>
            <div className={styles.container}>
                <h2> What have I learned? </h2>
                <div className={styles.gridContainer}>

                    <div className={styles.contentContainer}>
                        <div className={styles.card}>
                            <h3>
                                Definition of Programming Languages
                            </h3>
                            <p>
                                In this class, I studied how programming languages work, how they let us say the things
                                they
                                let us say, what different design features languages can have, and how those features
                                fit
                                together
                            </p>
                            <p>
                                Some highlights were: exploring language behaviour by crafting interpreters, comparing
                                and
                                contrasting environments and substitution, the power of first class functions, type
                                systems,
                                defunctionalization and trampolining, lazy evaluation, continuation passing style, and
                                implementation of mutable variables.
                            </p>
                        </div>
                    </div>
                    <div className={styles.contentContainer}>
                        <h3>
                            Operating Systems Design and Implementation
                        </h3>
                        <p>
                            In this class, I studied the core components of an operating system by implementing these
                            components for the micro-kernel based operating system barrelfish. The core components were:
                            Physical memory management, virtual memory management, process spawning, inter process
                            communication, booting cores, and cross core communication.
                        </p>
                        <p>
                            Some highlights were: Learning the bootup process, how physical memory is allocated, how
                            virtual
                            addresses are managed, problems with memory management, the challenges with inter process
                            communication, the challenges with communication across cores, what a microkernel
                            architecture
                            entails, and comparing and contrasting capabilities and access control lists.
                        </p>
                    </div>
                    <div className={styles.contentContainer}>
                        <h3>
                            Advanced Software Engineering
                        </h3>
                        <p>
                            In this class, I studied software engineering via the implementation of 2 projects. The
                            first
                            being a domain specific language from which users can mass produce, move, rename, or delete
                            files. The second project being a static analysis tool that would traverse JavaScript code
                            and
                            identify if a developer is accessing a non-existent property of an object.
                        </p>
                        <p>
                            Some highlights were: Defining the parsing rules and grammar rules in Antlr to convert user
                            written code into a parse tree that would be converted into an AST, learning about the
                            potential
                            and limitations of static and dynamic analysis tools and how these tools must be useful but
                            not
                            too “useful” for developers, briefly learning about leveraging concolic testing to automate
                            bug
                            finding and test case generation.
                        </p>
                    </div>
                    <div className={styles.contentContainer}>
                        <h3>
                            Distributed Systems
                        </h3>
                        <p>
                            In this class, I studied distributed systems, their architecture, challenges, and the
                            balance
                            between consistency, availability, and parition tolerance.
                        </p>
                        <p>
                            Some highlights were: Learning about how difficult consensus algorithms are to understand,
                            how
                            fault tolerance can be achieved, 2 phase commits, 3 phase commits, consistent ordering,
                            crash
                            consistency, byzantine fault tolerances, algorithms to detect failure, and the design
                            process
                            and implemention of distributed applications.
                        </p>
                    </div>
                    <div className={styles.contentContainer}>
                        <h3>
                            Human Computer Interactions
                        </h3>
                        <p>
                            In this class, I studied user experience and user interface principles and how to survey
                            users
                            to determine whether an application provides an ideal user experience.
                        </p>
                        <p>
                            Some highlights were: Learning about how we can leverage common human experiences to design
                            an
                            application that a user can quickly grasp due to familiarity, triangulation, surveying, and
                            data
                            analysis.
                        </p>
                    </div>
                    <div className={styles.contentContainer}>
                        <h3>
                            Applied Machine Learning
                        </h3>
                        <p>
                            In this class, I studied the application of machine learning is, the different domains of
                            machine learning, linear vs regression models, etc...
                        </p>
                        <p>
                            Some highlights were: hyperparameter optimization, neural networks, deep learning, time
                            series
                            analysis, class imbalances, preprocessing pipelines, decision trees, survival-analysis,
                            feature-engineering, regression-metrics, and clustering algorithms, recommender systems.
                        </p>
                    </div>
                    <div className={styles.contentContainer}>
                        <h3>
                            Internet Computing
                        </h3>
                        <p>
                            In this class, I studied all things internet. How the internet works, history of IP
                            addresses
                            and how they working, OSI model, transport protocols, TCP vs UDP, and security.
                        </p>
                        <p>
                            Some highlights were: motivation of IPV4 and IPv6, selection repeat, go back n, nat routers,
                            security.
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}
