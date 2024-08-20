import React from 'react'
import styles from '@/pages/courses/Courses.module.scss'

export default function index() {
    return (
        <>
            <div className={styles.container}>
                <h2> What have I learned? </h2>
                <div className={styles.gridContainer}>
                    <div className={styles.contentContainer}>
                        <h3>
                            Human Computer Interactions
                        </h3>
                        <p>
                            In this class, I studied user experience and user interface principles, techniques to
                            evaluate
                            users experiences, prototyping techniques, and how design decisions can influence a
                            user&apos;s
                            ability to use a product.
                        </p>
                        <p>
                            Some highlights were: Learning about how we can leverage popular human experiences in design
                            to make more intuitive interfaces that a user can easily navigate, using triangulation to
                            find
                            find common prototyping pitfalls, surveying techniques, and results analysis.
                        </p>
                    </div>
                    <div className={styles.contentContainer}>
                        <div className={styles.card}>
                            <h3>
                                Definition of Programming Languages
                            </h3>
                            <p>
                                In this class, I studied how programming languages work, how they let programmers
                                say the things they let want to say, what different design features languages can have,
                                how those features work together, and
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
                            Applied Machine Learning
                        </h3>
                        <p>
                            In this class, I studied the application of machine learning, what machine learning is,
                            the different domains of machine learning, linear vs regression models, how to evaluate and
                            optimize models, how to deal with class imbalance, and feature engineering.
                        </p>
                        <p>
                            Some highlights were: hyperparameter optimization, neural networks, deep learning, time
                            series analysis, class imbalances, preprocessing pipelines, decision trees,
                            survival-analysis,
                            feature-engineering, regression-metrics, clustering algorithms, and recommender systems.
                        </p>
                    </div>
                    <div className={styles.contentContainer}>
                        <h3>
                            Internet Computing
                        </h3>
                        <p>
                            In this class, I studied all things internet. How the internet works, history of IP
                            addresses and how they working, OSI model, transport protocols, TCP vs UDP, and security.
                            The 5 layers of the internet.
                        </p>
                        <p>
                            Some highlights were: motivation of IPV4 and IPv6, selective repeat, go back n, nat routers,
                            security, protocols, and finite state machines.
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}
