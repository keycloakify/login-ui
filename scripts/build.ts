import * as child_process from "child_process";
import * as fs from "fs";
import { join as pathJoin } from "path";
import { getThisCodebaseRootDirPath } from "./tools/getThisCodebaseRootDirPath";
import { z } from "zod";
import { assert, type Equals } from "tsafe/assert";
import { id } from "tsafe/id";
import { transformCodebase } from "../node_modules/keycloakify/src/bin/tools/transformCodebase";

const distDirPath = pathJoin(getThisCodebaseRootDirPath(), "dist");

fs.rmSync(distDirPath, { recursive: true, force: true });

child_process.execSync("npx tsc");

fs.rmSync(pathJoin(distDirPath, "tsconfig.tsbuildinfo"));

for (const dirBasename of ["src", "keycloak-theme", "keycloak-theme-resources"]) {
    transformCodebase({
        srcDirPath: pathJoin(getThisCodebaseRootDirPath(), dirBasename),
        destDirPath: pathJoin(distDirPath, dirBasename)
    });
}

type ParsedPackageJson = {
    name: string;
    version: string;
    description: string;
    repository: Record<string, string>;
    author: string;
    license: string;
    keywords: string[];
    homepage: string;
    dependencies: Record<string, string>;
    peerDependencies: Record<string, string>;
};

const zParsedPackageJson = (() => {
    type TargetType = ParsedPackageJson;

    const zTargetType = z.object({
        name: z.string(),
        version: z.string(),
        description: z.string(),
        repository: z.record(z.string(), z.string()),
        author: z.string(),
        license: z.string(),
        keywords: z.array(z.string()),
        homepage: z.string(),
        dependencies: z.record(z.string(), z.string()),
        peerDependencies: z.record(z.string(), z.string())
    });

    type InferredType = z.infer<typeof zTargetType>;

    assert<Equals<ParsedPackageJson, InferredType>>;

    return id<z.ZodType<TargetType>>(zTargetType);
})();

const parsedPackageJson_root = zParsedPackageJson.parse(
    JSON.parse(fs.readFileSync(pathJoin(getThisCodebaseRootDirPath(), "package.json")).toString("utf8"))
);

fs.writeFileSync(
    pathJoin(distDirPath, "package.json"),
    Buffer.from(
        JSON.stringify(
            {
                ...parsedPackageJson_root,
                publishConfig: {
                    access: "public"
                }
            },
            null,
            2
        ),
        "utf8"
    )
);
