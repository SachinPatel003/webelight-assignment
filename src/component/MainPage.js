import React, { useEffect } from "react";
import { gitApi } from "../store/appApi";
import { useGetGitRepoQuery } from "../store/api/gitApi";
import {
  Avatar,
  Box,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  Tooltip,
  Typography,
} from "@mui/material";
import { getDateFromTimeFrame } from "../utils";
import AccordionContainer from "../commonComponents/Accordion/AccordionContainer";
import StarBorderRoundedIcon from "@mui/icons-material/StarBorderRounded";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import DescriptionIcon from "@mui/icons-material/Description";
import CollectionsBookmarkIcon from "@mui/icons-material/CollectionsBookmark";
import { HighchartsReact } from "highcharts-react-official";
import Highcharts from "highcharts";

const MainPage = () => {
  const gitApiEndPoint = gitApi.endpoints.getGitRepo;
  const [getRepos, { data: reposData }] = gitApiEndPoint.useLazyQuery();

  const handleSelectTimePeriod = (e) => {
    getRepos(getDateFromTimeFrame(e.target.value));
  };

  useEffect(() => {
    getRepos(getDateFromTimeFrame("oneMonth"));
  }, []);

  return (
    <Box sx={{ padding: "21px" }}>
      <Grid container spacing={2}>
        <Grid item xs={11}>
          <Stack direction="row" justifyContent="center">
            <Typography variant="h5">Most Stared Repository</Typography>
          </Stack>
        </Grid>
        <Grid item xs={1}>
          <FormControl sx={{ width: "200px", float: "right" }}>
            <InputLabel>Repos Created in</InputLabel>
            <Select
              defaultValue="oneMonth"
              label="Repos Created in"
              onChange={(e) => handleSelectTimePeriod(e)}
            >
              <MenuItem value="oneWeek">Last One Week</MenuItem>
              <MenuItem value="twoWeek">Last Two Week</MenuItem>
              <MenuItem value="oneMonth">Last One Month</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        {reposData?.map((repo) => {
          return (
            <Grid item xs={12} key={repo?.id}>
              <AccordionContainer
                panel={repo?.id}
                accordionSummary={
                  <Stack
                    direction="row"
                    justifyContent="flex-start"
                    alignItems="center"
                    spacing={2}
                  >
                    <Avatar
                      alt={repo?.name}
                      variant="rounded"
                      src={repo?.owner?.avatar_url}
                      sx={{
                        height: "100px",
                        width: "100px",
                      }}
                    />
                    <Stack spacing={1}>
                      <Tooltip title="Repository Name" placement="top" arrow>
                        <Stack direction="row" alignItems="center" spacing={1}>
                          <CollectionsBookmarkIcon fontSize="medium" />
                          <Typography variant="h6">{repo?.name}</Typography>
                        </Stack>
                      </Tooltip>
                      <Stack direction="row" alignItems="center" spacing={1}>
                        <DescriptionIcon />
                        <Typography variant="subtitle1">
                          {repo?.description}
                        </Typography>
                      </Stack>
                      <Stack direction="row" alignItems="center" spacing={2}>
                        <Stack
                          direction="row"
                          justifyContent="center"
                          alignItems="center"
                          spacing={1}
                          sx={{
                            border: "3px solid lightGrey",
                            borderRadius: "5px",
                            minWidth: "70px",
                          }}
                        >
                          <StarBorderRoundedIcon />
                          <Typography>{repo?.stargazers_count}</Typography>
                        </Stack>
                        <Stack
                          direction="row"
                          justifyContent="center"
                          alignItems="center"
                          spacing={1}
                          sx={{
                            border: "3px solid lightGrey",
                            borderRadius: "5px",
                            minWidth: "70px",
                          }}
                        >
                          <ErrorOutlineIcon />
                          <Typography>{repo?.open_issues_count}</Typography>
                        </Stack>
                        <Typography>
                          Last Pushed: {new Date(repo.pushed_at).toDateString()}
                        </Typography>
                      </Stack>
                    </Stack>
                  </Stack>
                }
                owner={repo?.owner?.login}
                repoName={repo?.name}
                accordionDetails={<Box>Details</Box>}
              />
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};

export default MainPage;
