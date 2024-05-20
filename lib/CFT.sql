CREATE TABLE designation (
  id SERIAL PRIMARY KEY,
  designation_name VARCHAR(10) NOT NULL
);

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  user_id INT UNIQUE NOT NULL ,
  user_name VARCHAR(30) NOT NULL,
  email VARCHAR(50) NOT NULL,
  image VARCHAR(200),
  designation_id INT DEFAULT 1,
  password VARCHAR(200) NOT NULL,
  active bool DEFAULT FALSE,
  security bool DEFAULT FALSE,
  is_admin bool DEFAULT FALSE,
  is_super_admin bool DEFAULT FALSE,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE session (
  id TEXT PRIMARY KEY,
  expires_at TIMESTAMP NOT NULL,
  user_id INT NOT NULL REFERENCES users (id)
);


CREATE TABLE projects (
  project_id SERIAL PRIMARY KEY,
  project_name VARCHAR(10),
  project_security VARCHAR(10),
  disabled bool,
  active_stage VARCHAR(10),
  extra_options integer  -- Qty of additional options
);

CREATE TABLE stages (
  id SERIAL PRIMARY KEY,
  project_id INT NOT NULL REFERENCES projects (project_id),
  stage_name VARCHAR(10) NOT NULL ,
  stage_order INT NOT NULL
);

CREATE TABLE problem_lists (
  problemlist_id SERIAL PRIMARY KEY,
  problemlist_name VARCHAR(10) NOT NULL ,
  type VARCHAR(10),
  project_id INT NOT NULL REFERENCES projects (project_id)
);

CREATE TABLE project_vehicle_options (
  project_id SERIAL PRIMARY KEY,
  option1 VARCHAR(10),
  option2 VARCHAR(10),
  option3 VARCHAR(10),
  option4 VARCHAR(10),
  option5 VARCHAR(10),
  option6 VARCHAR(10),
  option7 VARCHAR(10),
  option8 VARCHAR(10),
  option9 VARCHAR(10),
  option10 VARCHAR(10),
  option11 VARCHAR(10),
  option12 VARCHAR(10),
  option13 VARCHAR(10),
  option14 VARCHAR(10),
  option15 VARCHAR(10),
  option16 VARCHAR(10),
  option17 VARCHAR(10),
  option18 VARCHAR(10),
  option19 VARCHAR(10),
  option20 VARCHAR(10)
);

CREATE TABLE engine_options (
  id SERIAL PRIMARY KEY,
  project_id INT NOT NULL REFERENCES projects (project_id),
  engine_name VARCHAR(10) NOT NULL
);

CREATE TABLE transmission_options (
  id SERIAL PRIMARY KEY,
  project_id INT NOT NULL REFERENCES projects (project_id),
  transmission_name VARCHAR(10) NOT NULL
);

CREATE TABLE colors (
  color_id SERIAL PRIMARY KEY,
  color_name VARCHAR(3) NOT NULL ,
  color VARCHAR(7) NOT NULL ,
  text_color VARCHAR(5) NOT NULL
);

CREATE TABLE color_project_connections (
  id SERIAL PRIMARY KEY,
  project_id INT NOT NULL REFERENCES projects (project_id),
  colorId INT NOT NULL REFERENCES colors (color_id)
);

CREATE TABLE organisation_chart (
  id SERIAL PRIMARY KEY,
  project_id INT NOT NULL REFERENCES projects (project_id),
  list_id INT NOT NULL REFERENCES problem_lists (problemlist_id),
  user_id INT NOT NULL REFERENCES users (id),
  leader BOOLEAN DEFAULT FALSE,
  sub_leader BOOLEAN DEFAULT FALSE,
  org_order integer NOT NULL
);

CREATE TABLE manager_list (
  id SERIAL PRIMARY KEY,
  project_id INT NOT NULL REFERENCES projects (project_id),
  user_id INT NOT NULL REFERENCES users (id),
  member_order INT NOT NULL
);

CREATE TABLE other_members_list (
  id SERIAL PRIMARY KEY,
  project_id INT NOT NULL REFERENCES projects (project_id),
  user_id INT NOT NULL REFERENCES users (id),
  member_order INT NOT NULL
);

CREATE TABLE project_accessList (
  id SERIAL PRIMARY KEY,
  project_id INT NOT NULL REFERENCES projects (project_id),
  user_id INT NOT NULL REFERENCES users (id)
);

CREATE TABLE class_list (
  id SERIAL PRIMARY KEY,
  class_list_name VARCHAR(20) NOT NULL
);

CREATE TABLE action_list (
  id SERIAL PRIMARY KEY,
  action_name VARCHAR(20) NOT NULL
);

CREATE TABLE status_list (
  id SERIAL PRIMARY KEY,
  status_name varchar(20) NOT NULL
);

CREATE TABLE project_responsibilities (
  id SERIAL PRIMARY KEY,
  project_id INT NOT NULL REFERENCES projects (project_id),
  class_id INT NOT NULL REFERENCES class_list (id),
  action_id INT NOT NULL REFERENCES action_list (id),
  status_id INT NOT NULL REFERENCES status_list (id)
);

CREATE TABLE problems (
  id SERIAL PRIMARY KEY,
  item_id INT NOT NULL ,
  project_id INT NOT NULL REFERENCES projects (project_id),
  problemlist_id INT NOT NULL REFERENCES problem_lists (problemlist_id),
  stage1 BOOLEAN,
  stage2 BOOLEAN,
  stage3 BOOLEAN,
  stage4 BOOLEAN,
  stage5 BOOLEAN,
  stage6 BOOLEAN,
  problem_name VARCHAR(50),
  problem_description TEXT,
  actions_done TEXT,
  countermeasure TEXT,
  grade VARCHAR(1),
  class_id INT NOT NULL REFERENCES class_list (id),
  action_id INT NOT NULL REFERENCES action_list (id),
  status_id INT NOT NULL REFERENCES status_list (id),
  responsible_person INT NOT NULL REFERENCES users (id),
  date DATE,
  created_at timestamp DEFAULT CURRENT_TIMESTAMP,
  updated_at timestamp DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE listeners (
  id SERIAL PRIMARY KEY,
  problem_id INT NOT NULL REFERENCES problems (id),
  listener INT NOT NULL REFERENCES users (id)
);

CREATE TABLE vehicle_list (
  vehicle_id SERIAL PRIMARY KEY,
  car_identification VARCHAR(4) NOT NULL,
  body_no VARCHAR(11),
  color INT REFERENCES colors (color_id),
  engine INT REFERENCES engine_options (id),
  transmission INT REFERENCES transmission_options (id),
  destination VARCHAR(20),
  vehicle_input_date DATE,
  s_off_date DATE,
  vehicle_status VARCHAR(10)
);

CREATE TABLE vehicle_options (
  vehicle_id SERIAL PRIMARY KEY REFERENCES vehicle_list (vehicle_id),
  option1 BOOLEAN,
  option2 BOOLEAN,
  option3 BOOLEAN,
  option4 BOOLEAN,
  option5 BOOLEAN,
  option6 BOOLEAN,
  option7 BOOLEAN,
  option8 BOOLEAN,
  option9 BOOLEAN,
  option10 BOOLEAN,
  option11 BOOLEAN,
  option12 BOOLEAN,
  option13 BOOLEAN,
  option14 BOOLEAN,
  option15 BOOLEAN,
  option16 BOOLEAN,
  option17 BOOLEAN,
  option18 BOOLEAN,
  option19 BOOLEAN,
  option20 BOOLEAN
);

CREATE TABLE vehicle_issues (
  id SERIAL PRIMARY KEY,
  item_id INT NOT NULL ,
  project_id INT NOT NULL REFERENCES projects (project_id),
  stage INT NOT NULL REFERENCES stages (id),
  vehicle_id INT NOT NULL REFERENCES vehicle_list (vehicle_id),
  problem_name VARCHAR(50),
  problem_description TEXT,
  repair_method TEXT,
  status VARCHAR(10),
  linked_problem INT REFERENCES problems (id)
);

CREATE TABLE notification (
  id SERIAL PRIMARY KEY,
  user_id INT NOT NULL REFERENCES users (id),
  problem_id INT NOT NULL REFERENCES problems (id),
  readed BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE messages (
   id SERIAL PRIMARY KEY,
    user_id INT NOT NULL REFERENCES users (id),
    problem_id INT NOT NULL REFERENCES problems (id),
    message_text TEXT NOT NULL ,
    attached_file VARCHAR(200),
    link VARCHAR(200),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO designation (designation_name) VALUES ('NEW');
