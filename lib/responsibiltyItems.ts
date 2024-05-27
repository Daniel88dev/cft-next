import pool from "@/lib/db";

export async function getRespDataForProject(projectSlug: string) {
  const project = await pool.query(
    `
    SELECT p.project_id, cl.id AS class_id, cl.class_list_name,
           al.id AS action_id, al.action_name, sl.id AS status_id, sl.status_name, pr.require_date
    FROM projects AS p
    LEFT JOIN project_responsibilities AS pr ON pr.project_id = p.project_id
    LEFT JOIN class_list AS cl ON cl.id = pr.class_id
    LEFT JOIN action_list AS al ON al.id = pr.action_id
    LEFT JOIN status_list AS sl ON sl.id = pr.status_id
    WHERE project_slug = $1
    `,
    [projectSlug]
  );

  return project.rows;
}

export async function getClassDataForProject(projectSlug: string) {
  const classData = await pool.query(
    `
SELECT DISTINCT cl.id, cl.class_list_name
FROM projects AS p
LEFT JOIN project_responsibilities AS pr ON p.project_id = pr.project_id
LEFT JOIN class_list AS cl ON pr.class_id = cl.id
WHERE p.project_slug = $1
  `,
    [projectSlug]
  );

  return classData.rows;
}
