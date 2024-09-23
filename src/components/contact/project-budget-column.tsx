"use client";

import { ArrowRight } from "lucide-react";
import { Button } from "../ui/button";
import { useState } from "react";
import { motion } from "framer-motion";

const projects = ["Development", "Maintenance", "Branding", "UI/UX design"];
const budgets = ["-5K€", "5K-10K€", "10K-15K€", "+20K€"];

const ProjectBudgetColumn = ({ isVisible }: { isVisible: boolean }) => {
    return (
        <div className="overflow-hidden">
            <motion.div
                initial={{ x: 150, opacity: 0 }}
                animate={isVisible ? { x: 0, opacity: 1 } : {}}
                transition={{ duration: 0.3 }}
            >
                <span className="uppercase font-n27 text-2xl font-medium mb-3 block">
                    Project:
                </span>
                <ul className="flex flex-wrap uppercase font-n27 font-medium mb-5">
                    {projects.map((project, i) => (
                        <Chip key={i}>{project}</Chip>
                    ))}
                </ul>
                <span className="uppercase font-n27 text-2xl font-medium mb-3 block">
                    Budget:
                </span>
                <ul className="flex flex-wrap uppercase font-n27 font-medium">
                    {budgets.map((budget, i) => (
                        <Chip key={i}>{budget}</Chip>
                    ))}
                </ul>
                <div className="flex mt-5">
                    <Button variant={"primaryOutline"} className="ms-auto">
                        ENVOYER <ArrowRight />
                    </Button>
                </div>
            </motion.div>
        </div>
    );
};

export default ProjectBudgetColumn;

const Chip = ({ children }: { children: string }) => {
    const [active, setActive] = useState(false);
    return (
        <li
            onClick={() => setActive((prev) => !prev)}
            className={`${
                active ? "bg-primary border-primary" : "border-white"
            } py-2 px-4 border m-1 rounded-full cursor-pointer transition-all duration-500`}
        >
            {children}
        </li>
    );
};
